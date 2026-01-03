import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Card } from '../ui/card';
import { cn } from '../../lib/utils';
import type { Staff } from '@/types/staff';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface StaffCardProps extends Staff{
  onClick?: () => void;
}

const StaffCard: React.FC<StaffCardProps> = ({
  firstName,
  lastName,
  staffId,
  jobPosition,
  contactPhone,
  contactEmail,
  staffImageUrl,
  onClick,
}) => {
  return (
    <Card
      className={cn(
        "p-5 hover:shadow-lg hover:border-border/80 cursor-pointer hover:transition-all hover:duration-200",
        "border overflow-hidden justify-between border-border/50 bg-linear-to-br from-background to-background/80"
      )}
      onClick={onClick}
    >
        <h3 className="text-base font-semibold text-foreground truncate">{firstName} {lastName}</h3>

        <Avatar className='rounded-full w-5/6 h-auto mx-auto '>
            <AvatarImage
            src={staffImageUrl}
            alt={`photo of ${firstName + " " + lastName}`}
            className="object-cover grayscale-75"
            />
            <AvatarFallback className='aspect-square text-2xl'>{(firstName.charAt(0) + lastName.charAt(0)).toUpperCase()}</AvatarFallback>
        </Avatar>


      {/* Contact Information */}
      <div className="space-y-3 pt-1 tracking-tight text-muted-foreground">
        {/* Contact Name */}
        <div className="text-sm">
          <p className="">Staff Id: <span className="text-sm tracking-wider text-foreground inline-block ml-2">{staffId}</span></p>
          <p className="">Job Position: <span className="text-sm text-foreground tracking-wider truncate">{jobPosition}</span></p>
        </div>

      {/* Divider */}
      <div className="h-px bg-border/30 my-4"></div>

        {/* Staff Contact */}
        <div className="text-xs tracking-wide">
            <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
                <span className="text-muted-foreground truncate">{contactEmail}</span>
            </div>
            <div className="flex mt-1 items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                <span className="text-muted-foreground truncate">{contactPhone}</span>
            </div>
        </div>
      </div>
    </Card>
  );
};

export { StaffCard };
