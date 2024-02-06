import React from 'react'

const Toolbar = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <div>dsd</div>
        <div>dsdsaas</div>
        <div>dsdsaassdaf</div>
        <div>dsdsa</div>
      </div>
      <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
        <div>dsdsaassdaf</div>
        <div>dsdsa</div>
      </div>
    </div>
  )
}

export default Toolbar

Toolbar.Skeleton = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 bg-white h-[360px] w-[52px] shadow-md rounded-md" />
  );
};