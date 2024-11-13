type iconProps = {
  className?: string;
};

export default function DefaultIcon(props: iconProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="34909"
      {...props}
    >
      <path
        d="M264.8 296.6c0 128.6 105.9 232.7 236.4 232.7s236.4-104.2 236.4-232.7S631.7 63.9 501.2 63.9 264.8 168 264.8 296.6z m344.8 274.3H412.7C246 570.9 110.5 704.7 108 871.4V891c0 67.6 136.5 67.6 304.7 67.6h196.9c168.8 0 304.7 0 304.7-67.6v-19.6c-2.3-166.7-138-300.5-304.7-300.5z m0 0"
        fill="currentColor"
        p-id="34910"
      ></path>
    </svg>
  );
}
