import { Accordion, AccordionItem } from "@nextui-org/react";
import GroupList from "./GroupList";
import styles from "./GroupAccordion.module.css";
import { MouseEvent, useState } from "react";
import IconWrapper from "@/images/iconTsx/IconWrapper";
import AddSvg from "@/images/svg/add.svg?react";

export default function GroupAccordion() {
  const itemClass = {
    trigger: "py-3",
    title: "text-sm",
    content: "bg-inherit pt-0",
  };

  const [selectedKeys, setSelectedKeys] = useState(new Set(["001", "002"]));

  const AccordionList = [
    {
      title: "文字频道",
      id: "001",
      type: "text",
      groupItems: [
        {
          key: "new",
          label: "New file",
        },
        {
          key: "copy",
          label: "Copy link",
        },
        {
          key: "edit",
          label: "Edit file",
        },
        {
          key: "delete",
          label: "Delete file",
        },
      ],
    },
    {
      title: "语音频道",
      id: "002",
      type: "audio",
      groupItems: [
        {
          key: "A1",
          label: "语音频道A1",
        },
        {
          key: "A2",
          label: "语音频道A2",
        },
      ],
    },
  ];

  const handleSettingClick = (e: MouseEvent) => {
    e.stopPropagation()
    console.log('tri3', e);
  }

  const handleAccordionToggle = (id: string) => {
    console.log('0', selectedKeys);
    
    const originalSelectedKeys = new Set(selectedKeys)
    console.log('1', originalSelectedKeys);
    
    if (originalSelectedKeys.has(id)) {
      originalSelectedKeys.delete(id)
    } else {
      originalSelectedKeys.add(id)
    }
    console.log('2', originalSelectedKeys);
    
    setSelectedKeys(originalSelectedKeys)
  }

  const AccordionItemTitleRenderer = (title: string) => {
    return <>
      <div className="flex justify-between items-center">
        <span>{title}</span>
        <IconWrapper width="1.4em" height="1.4em" className="transform transition-transform duration-150 hover:scale-125">
          <AddSvg onClick={handleSettingClick} />
        </IconWrapper>
      </div>
    </>
  }

  return (
    <Accordion
      selectedKeys={selectedKeys}
      className={`${styles["accordion-container"]} `}
      itemClasses={itemClass}
      selectionMode="multiple"
      variant="shadow"
    >
      {AccordionList.map((accordion) => (
        <AccordionItem
          onClick={() => handleAccordionToggle(accordion.id)}
          key={accordion.id}
          title={AccordionItemTitleRenderer(accordion.title)}
          aria-label={accordion.title}
        >
          <GroupList
            groupAriaLabel={accordion.title}
            groupItems={accordion.groupItems}
            type={accordion.type}
          />
        </AccordionItem>
      ))}
    </Accordion>
  );
}
