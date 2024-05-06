/*
const ViewContent = ({ components, content, globals }) => {
  const list = components.filter((_, idx) => content[idx].comp_content);
  return (
    <div>
      {list.map((Itm, i) => (
        <Itm
          key={`itm-${i}`}
          id={`${content[i].comp_type}-${i}`}
          content={content[i].comp_content}
          globals={globals}
        />
      ))}
    </div>
  );
};

export { ViewContent as default };
*/