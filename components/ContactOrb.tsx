import React, { useState } from 'react';

function ContactOrb() {
  const [open, setOpen] = useState(false);

  function onOpen() {
    console.log('clicked');
    console.log(open);
    setOpen(!open);
  }

  return (
    <>
      <div
        onClick={onOpen}
        className="cursor-pointer fixed m-3 bottom-0 right-0 w-10 h-10 rounded-full bg-primary-light"
      ></div>
      <ContactMenu open={open} />
    </>
  );
}

function ContactMenu({ open }: any) {
  console.log(open);
  return (
    <div
      className={`${
        open ? 'flex flex-col' : 'hidden'
      } fixed bottom-0 right-0 mr-16 mb-10 bg-[#717171] z-10 p-4 rounded-lg`}
    >
      <label className="flex flex-col my-2">
        Subject
        <input type="text"></input>
      </label>
      <label className="flex flex-col my-2">
        Message
        <textarea></textarea>
      </label>

      <div className="flex justify-end w-full">
        <button>Send</button>
      </div>
    </div>
  );
}

export default ContactOrb;
