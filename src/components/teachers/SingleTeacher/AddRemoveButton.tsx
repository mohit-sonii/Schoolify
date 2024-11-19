import EditButton from '@/components/EditButton'
import RemoveButton from '@/components/RemoveButton'
import React from 'react'

const AddRemoveButton = () => {
  return (
    <div className="flex gap-3 items-center justify-center">
      <EditButton innerText='Edit Teacher' />
      <RemoveButton innerText='Remove Teacher'/>
    </div>
  )
}

export default AddRemoveButton