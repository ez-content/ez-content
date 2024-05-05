const ViewContent = ({
    compListAll,
    contentListAll,
    globals
}) => {
    return (
        <>
        {compListAll && compListAll.length > 0 && compListAll.map((Itm, idx) => {
          
          if (contentListAll[idx] && contentListAll[idx].comp_content) {
            return (
              <div
                key={`itm-${idx}`}
                id={`${contentListAll[idx].comp_type}-${idx}`}
              >
                <Itm
                  content={contentListAll[idx].comp_content}
                  globals={globals}
                />
              </div>
            );
          } else {
            return <></>;
          }

        })}
        </>
    )
}

export {ViewContent as default}