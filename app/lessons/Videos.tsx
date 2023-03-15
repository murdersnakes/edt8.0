import React from "react";

export default function Videos() {
  return (
    <div className='flex flex-col gap-4'>
      <iframe
        src='https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100086082986117%2Fvideos%2F698315481975661%2F&show_text=false&width=560&t=0'
        height={200}
        width={320}
        allowFullScreen
        allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
      ></iframe>
    </div>
  );
}
