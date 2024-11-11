import { Listbox, ListboxItem } from "@nextui-org/react";
// import styles from "./GroupList.module.css";

type GroupProps = {
  groupItems: {
    key: string
    label: string
  }[],
  groupAriaLabel: string
}

export default function GroupList(props: GroupProps) {
  const classNames = {
    wrapper: 'py-0'
  }

  return (
    <div>
      <Listbox items={props.groupItems} aria-label={props.groupAriaLabel}>
        {props.groupItems.map((item) => (
          <ListboxItem
            classNames={classNames}
            key={item.key}
            color={item.key === "delete" ? "danger" : "default"}
            className={item.key === "delete" ? "text-danger" : ""}
          >
            {item.label}
          </ListboxItem>
        ))}
      </Listbox>
    </div>
  );
}
