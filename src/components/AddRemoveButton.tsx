import EditButton from "./EditButton";
import RemoveButton from "./RemoveButton";
import React from "react";

const AddRemoveButton = ({ text }: { text: string }) => {
  return (
    <div className="flex gap-3 items-center justify-center">
      <EditButton innerText={`Add ${text}`} />
      <RemoveButton innerText={`Remove ${text}`} />
    </div>
  );
};

export default AddRemoveButton;
