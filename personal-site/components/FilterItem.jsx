import clsx from "clsx";

export default function FilterItem  ({ name, count, active })
 {
  return (
    <h3 className={clsx(
        "text-base",
        active ? "text-text-lvl-1" : "text-text-lvl-4 hover:text-text-lvl-3"
    )}>
        <span className={clsx(
            active ? "underline-offset-8 underline decoration-blue decoration-2" : ""
        )}>{name}</span>
        <sup className="pl-[2px] text-[10px]">{count}</sup>
    </h3>
  );
}

