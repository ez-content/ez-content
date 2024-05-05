"use client";
import dynamic from "next/dynamic";

export default function SlugPage({ content, globals, isPreview }) {
  let _CONTENT;
  if (isPreview && isPreview.comp) {
    let tmpContent = content.filter((itm) => itm.comp_type === isPreview.comp);
    _CONTENT = tmpContent;
  } else {
    _CONTENT = content;
  }

  const compList = _CONTENT.map((itm) => {
    if (!itm.comp_global) {
      const tmpPath = itm.comp_path ? `${itm.comp_path}` : `/${itm.comp_type}`;
      return dynamic(() =>
        import(`../../../../components${tmpPath}`, { ssr: !isPreview })
      );
    } else {
      const globalContentList = globals.filter((itm2) => {
        return itm2.global_title === itm.comp_type;
      });

      return globalContentList[0]?.global_content.map((itm2) => {
        console.log(itm2);
        const tmpPath = itm2.comp_path
          ? `${itm2.comp_path}`
          : `/${itm2.comp_type}`;

        return dynamic(() =>
          import(`../../../../components${tmpPath}`, { ssr: !isPreview })
        );
      });
    }
  });

  const contentList = _CONTENT.map((itm) => {
    if (!itm.comp_global) {
      return itm;
    } else {
      const globalContentList = globals.filter((itm2) => {
        return itm2.global_title === itm.comp_type;
      });
      return globalContentList[0]?.global_content;
    }
  });

  const compListAll = compList.flat();
  const contentListAll = contentList.flat();

  return (
    <div>
      <main>
        {compListAll.map((Itm, idx) => {
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
      </main>
    </div>
  );
}
