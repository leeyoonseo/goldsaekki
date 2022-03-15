import React from "react";
import Textarea from "@/components/common/Textarea/textarea";

const guestbook = () => {
  return (
    <div>
      <h1>guestbook</h1>
      {/* <Textarea max="100" value="" placeholder="방명록을 입려해주세요." /> */}
      <Textarea />
    </div>
  );
};

export default guestbook;
