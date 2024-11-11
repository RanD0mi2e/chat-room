import { Button, Input, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";

interface headerProps {
  title: string;
}

export default function ChannelHeader({ title }: headerProps) {
  // 功能栏弹层
  const content = (
    <PopoverContent className="w-[240px]">
      {(titleProps) => (
        <div className="px-1 py-2 w-full">
          <p className="text-small font-bold text-foreground" {...titleProps}>
            Dimensions
          </p>
          <div className="mt-2 flex flex-col gap-2 w-full">
            <Input
              defaultValue="100%"
              label="Width"
              size="sm"
              variant="bordered"
            />
            <Input
              defaultValue="300px"
              label="Max. width"
              size="sm"
              variant="bordered"
            />
            <Input
              defaultValue="24px"
              label="Height"
              size="sm"
              variant="bordered"
            />
            <Input
              defaultValue="30px"
              label="Max. height"
              size="sm"
              variant="bordered"
            />
          </div>
        </div>
      )}
    </PopoverContent>
  );

  return (
    <div>
      <Popover key={title} showArrow offset={10} placement="bottom" backdrop="blur">
        <PopoverTrigger>
          <Button radius="none" className="w-full">
            {title}的频道
          </Button>
        </PopoverTrigger>
        {content}
      </Popover>
    </div>
  );
}
