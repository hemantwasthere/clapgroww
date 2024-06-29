import { ArrowDownToLine, Calendar, Download } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Profile = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="select-none">
            Open
          </Button>
        </SheetTrigger>
        <SheetContent className="sm:max-w-[942px] w-full">
          <SheetHeader className="mt-6">
            {/* <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you are done.
            </SheetDescription> */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative h-[96px] w-[96px]">
                  <Image
                    src="/profile.png"
                    alt="profile"
                    objectFit="cover"
                    fill
                  />
                </div>

                <div className="font-normal text-base text-[#5B5967]">
                  <h3 className="font-medium text-xl text-[#2D2C37]">
                    Subhangee Agarwal
                  </h3>
                  <p>Senior Manager</p>
                  <p>Designer | Kolkata</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Calendar className="h-6 w-6" />

                <Select>
                  <SelectTrigger className="w-[180px] h-8">
                    <div className="flex items-center gap-2">
                      <ArrowDownToLine className="h-4 w-4" />
                      <SelectValue placeholder="Download" className="text-sm" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <div className="w-full px-3 py-1 hover:bg-accent rounded-md cursor-pointer text-xs">
                      CSV
                    </div>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </SheetHeader>
          {/* <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4"></div>
            <div className="grid grid-cols-4 items-center gap-4"></div>
          </div> */}
          <SheetFooter>
            <SheetClose asChild></SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Profile;
