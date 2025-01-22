import { Handle, Position } from '@xyflow/react';
import Image from 'next/image';

interface CentralNodeProps {
  data: {
    label: string;
  };
}

const CentralNode = ({ }: CentralNodeProps) => {
  return (
    <div className="p-8 rounded-full border-2 border-[#74ff71] bg-neutral-100 z-[100] shadow-[#2f999962] shadow-lg">
      <Handle type="source" position={Position.Right} className="w-3 h-3 bg-violet-500" />
      <div className="flex items-center justify-center">
        <Image
          height={32}
          width={32}
          className='w-32 h-32'
          src={'/zyn logo.png'}
          alt='logo'
         />
      </div>
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export default CentralNode; 