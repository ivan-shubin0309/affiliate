import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../../ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

import { Code2Icon, Copy, Image, Plus } from "lucide-react";
import { Button } from "../../ui/button";

interface Props {
  values: valueProps[];
  file?: string;
  alt?: string;
  url?: string;
  isOpen?: boolean;
}

interface valueProps {
  title: string;
  value: string | undefined;
}

export const CreativeMaterialDialogComponent = ({
  values,
  file,
  alt,
  url,
  isOpen,
}: Props) => {
  return (
    <Dialog open={isOpen}>
      <div className="ml-5 w-full rounded-xl">
        <div className=" bg-[#F5F8FA] p-4 md:px-8">
          <div className="justify-between md:flex">
            <div className="">
              <div className=" text-sm font-medium text-[#717171]">
                {values[0]?.title}
              </div>
              <div className="text-sm font-medium md:mt-3 md:text-lg">
                {values[0]?.value}
              </div>
            </div>
            <div className="mt-2 flex justify-between md:block">
              <div>
                <div className=" text-sm font-medium text-[#717171]">
                  {values[1]?.title}
                </div>
                <div className="text-sm font-medium md:mt-3 md:text-lg">
                  {values[1]?.value}
                </div>
              </div>
              <div className="md:hidden">
                <div className=" text-sm font-medium text-[#717171]">
                  {values[2]?.title}
                </div>
                <div className=" text-sm text-[#353535] md:text-lg">
                  {values[2]?.value}
                </div>
              </div>
            </div>
          </div>
          <div className="justify-between pt-1 md:flex md:pt-12 ">
            <div className="mt-2 hidden md:block">
              <div className=" text-sm font-medium text-[#717171]">
                {values[2]?.title}
              </div>
              <div className=" text-sm text-[#353535] md:text-lg">
                {values[2]?.value}
              </div>
            </div>
            <div className="mt-2">
              <div className=" text-sm font-medium text-[#717171]">
                {values[3]?.title}
              </div>
              <div className=" text-sm text-[#353535] md:text-lg">
                {values[3]?.value}
              </div>
            </div>
            <div className="mt-2 flex justify-between md:block">
              <div>
                <div className="text-sm font-medium text-[#717171]">
                  {values[4]?.title}
                </div>
                <div className=" text-sm text-[#353535] md:text-lg">
                  {values[4]?.value}
                </div>
              </div>
              <div className="md:hidden">
                <div className="text-sm font-medium text-[#717171]">
                  Language
                </div>
                <div className=" text-sm text-[#353535] md:text-lg">
                  English
                </div>
              </div>
            </div>
            <div className="mt-2 hidden md:block">
              <div className=" text-sm font-medium text-[#717171]">
                Language
              </div>
              <div className=" text-sm text-[#353535] md:text-lg">English</div>
            </div>
          </div>
        </div>
        <div className="mt-1 hidden items-end justify-between md:mt-3 md:block lg:block xl:flex">
          <div className="">
            <div className="mb-1 ml-2 text-xs font-medium text-[#525252]">
              Click URL
            </div>
            <div className="rounded border border-[#D7D7D7] bg-[#F9F9FF] py-2 px-3 text-sm font-medium text-[#666666] xl:w-60 2xl:w-96">
              {url}
            </div>
          </div>
          <div className="mt-5 flex items-end justify-center md:justify-end">
            <div className="">
              <div className="">
                <Button variant="azure">
                  <div className="text-white">Copy Click Url</div>
                  <div className="ml-2 items-center">
                    <Copy className="text-white" />
                  </div>
                </Button>
              </div>
            </div>
            <div className="ml-2">
              <div className="">
                <DialogTrigger>
                  <Button variant="azure-outline">
                    Get HTML Code
                    <div className="ml-2 items-center">
                      <Code2Icon className="text-[#282560]" />
                    </div>
                  </Button>
                </DialogTrigger>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DialogContent className="sm:max-w-sm md:max-w-3xl">
        <DialogHeader className="text-left text-lg font-medium text-azure">
          HTML Code
        </DialogHeader>
        <form className="w-full pt-5">
          <div className="mb-6 justify-between md:flex md:space-x-4">
            <div className="mb-3 w-full md:w-1/2">
              <label
                className="mb-2 block  pl-3 text-sm font-medium tracking-wide text-[#525252]"
                htmlFor="grid-first-name"
              >
                Profile
              </label>
              <div className="flex">
                <div className=" relative flex w-full items-center ">
                  <Select defaultValue={"1"}>
                    <SelectTrigger className="border px-4 py-3  text-xs ">
                      <SelectValue placeholder="Select days" />
                    </SelectTrigger>
                    <SelectContent className="border text-xs">
                      <SelectGroup>
                        <SelectItem value={"1"}>Account 1</SelectItem>
                        <SelectItem value={"2"}>Account 2</SelectItem>
                        <SelectItem value={"3"}>Account 3</SelectItem>
                        <SelectItem value={"4"}>Account 4</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Button variant="primary" className="ml-2" size="rec">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <label
                className="mb-2 block pl-3 text-sm font-medium tracking-wide text-[#525252]"
                htmlFor="grid-first-name"
              >
                Dynamic Parameter
              </label>
              <div className="flex">
                <div className=" relative flex w-full items-center ">
                  <Select defaultValue={"1"}>
                    <SelectTrigger className="border px-4 py-3  text-xs ">
                      <SelectValue placeholder="Select days" />
                    </SelectTrigger>
                    <SelectContent className="border text-xs">
                      <SelectGroup>
                        <SelectItem value={"1"}>Account 1</SelectItem>
                        <SelectItem value={"2"}>Account 2</SelectItem>
                        <SelectItem value={"3"}>Account 3</SelectItem>
                        <SelectItem value={"4"}>Account 4</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Button variant="primary" className="ml-2" size="rec">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="w-full px-3">
              <textarea
                className="border-#D7D7D7 mb-3 h-48 w-full rounded-3xl border bg-[#F0F9FF] py-3 px-4 text-base font-medium text-[#1B48BB]"
                value='<div class="container"> 
                                                        <img src="img_5terre_wide.jpg" alt="Cinque Terre" width="1000" height="300">
                                                        <div class="topleft">Top Left</div>
                                                      </div>'
                id="grid-textarea"
              />
            </div>
          </div>
        </form>
        <div className="justify-between md:flex">
          <div className="mb-2 flex justify-between md:block">
            <div className="rounded ">
              <Button variant="azure" size="md">
                Get Code
              </Button>
            </div>
            <div className="rounded md:hidden">
              <Button variant="azure" size="md">
                <div className="text-base text-white">Copy Click Url</div>
                <div className="ml-2">
                  <Copy className="h-4 w-4 text-white" />
                </div>
              </Button>
            </div>
          </div>
          <div className="flex justify-between md:justify-center md:space-x-2">
            <div className="hidden rounded md:block">
              <div className="rounded">
                <Button variant="azure" size="md">
                  <div className="text-base text-white md:font-medium">
                    Copy Click Url
                  </div>
                  <div className="ml-2">
                    <Copy className="h-4 w-4 text-white" />
                  </div>
                </Button>
              </div>
            </div>
            <div className=" rounded">
              <div className="">
                <Button variant="azure-outline" size="md">
                  Get HTML Code
                  <div className="ml-2">
                    <Code2Icon className="h-5  w-5 text-[#282560]" />
                  </div>
                </Button>
              </div>
            </div>

            <div className="rounded">
              <div className="">
                <Button variant="azure" size="md">
                  Download Image
                  <div className="ml-2">
                    <Image className="h-4 w-4 text-white" />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};