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

  // 展开项
  const [selectedKeys, setSelectedKeys] = useState(new Set(["001", "002"]));

  const AccordionList = [
    {
      title: "文字频道",
      id: "001",
      type: "text",
      groupItems: [
        {
          key: "0001",
          label: "New file",
        },
        {
          key: "0002",
          label: "Copy link",
        },
        {
          key: "0003",
          label: "Edit file",
        },
        {
          key: "0004",
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
  }

  const handleAccordionToggle = (id: string) => {
    const originalSelectedKeys = new Set(selectedKeys)
    
    if (originalSelectedKeys.has(id)) {
      originalSelectedKeys.delete(id)
    } else {
      originalSelectedKeys.add(id)
    }
    
    setSelectedKeys(originalSelectedKeys)
  }

  const AccordionItemTitleRenderer = (title: string) => {
    return <>
      <div className={`flex justify-between items-center ${styles['accordion-item']}`}>
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
