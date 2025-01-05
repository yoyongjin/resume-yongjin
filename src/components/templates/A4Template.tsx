// A4Wrapper.tsx
import React from 'react';

interface Prop {
  children: React.ReactNode;
}

const A4Template = ({ children }: Prop) => {
  return (
    <div className="w-[210mm] h-[297mm] bg-white border border-gray-300 mx-auto overflow-y-auto flex flex-col gap-5">
      {children}
    </div>
  );
};

export default A4Template;
