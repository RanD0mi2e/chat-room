import { Accordion, AccordionItem } from "@nextui-org/react";
import GroupList from "./GroupList";
import styles from './GroupAccordion.module.css'

export default function GroupAccordion() {
  const itemClass = {
    trigger: "py-3",
    title: "text-sm",
    content: "bg-inherit pt-0"
  }

  const AccordionList = [
    {
      title: "文字频道",
      id: "001",
      type: 'text',
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
      type: 'audio',
      groupItems: [
        {
          key: "A1",
          label: "语音频道A1"
        },
        {
          key: "A2",
          label: "语音频道A2"
        }
      ]
    },
  ];

  return <Accordion className={styles['accordion-container']} itemClasses={itemClass} selectionMode="multiple" variant="shadow">
    { AccordionList.map(accordion => <AccordionItem key={accordion.id} title={accordion.title} aria-label={accordion.title}>
      <GroupList groupAriaLabel={accordion.title} groupItems={accordion.groupItems} type={accordion.type} />
    </AccordionItem>) }
  </Accordion>;
}
