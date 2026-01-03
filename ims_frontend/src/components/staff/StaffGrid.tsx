import { StaffCard } from './StaffCard';


const staffProfiles = [
  {
    firstName: "Amara",
    lastName: "Okorie",
    staffId: "STF-001",
    jobPosition: "General Manager",
    staffImageUrl: "https://picsum.photos/seed/staff1/200",
    contactEmail: "amara.okorie@example.com",
    contactPhone: "+2348011111111",
  },
  {
    firstName: "David",
    lastName: "Adewale",
    staffId: "STF-002",
    jobPosition: "Fitness Instructor",
    staffImageUrl: "https://picsum.photos/seed/staff2/200",
    contactEmail: "david.adewale@example.com",
    contactPhone: "+2348022222222",
  },
  {
    firstName: "Kemi",
    lastName: "Salami",
    staffId: "STF-003",
    jobPosition: "Front Desk Officer",
    staffImageUrl: "https://picsum.photos/seed/staff3/200",
    contactEmail: "kemi.salami@example.com",
    contactPhone: "+2348033333333",
  },
  {
    firstName: "Chinedu",
    lastName: "Eze",
    staffId: "STF-004",
    jobPosition: "Maintenance Technician",
    staffImageUrl: "https://picsum.photos/seed/staff4/200",
    contactEmail: "chinedu.eze@example.com",
    contactPhone: "+2348044444444",
  },
  {
    firstName: "Fatima",
    lastName: "Bello",
    staffId: "STF-005",
    jobPosition: "Nutrition Coach",
    staffImageUrl: "https://picsum.photos/seed/staff5/200",
    contactEmail: "fatima.bello@example.com",
    contactPhone: "+2348055555555",
  },
  {
    firstName: "Tobi",
    lastName: "Afolabi",
    staffId: "STF-006",
    jobPosition: "Marketing Lead",
    staffImageUrl: "https://picsum.photos/seed/staff6/200",
    contactEmail: "tobi.afolabi@example.com",
    contactPhone: "+2348066666666",
  },
  {
    firstName: "Grace",
    lastName: "Nwachukwu",
    staffId: "STF-007",
    jobPosition: "HR Executive",
    staffImageUrl: "https://picsum.photos/seed/staff7/200",
    contactEmail: "grace.nwachukwu@example.com",
    contactPhone: "+2348077777777",
  },
  {
    firstName: "Samuel",
    lastName: "Ogunleye",
    staffId: "STF-008",
    jobPosition: "Personal Trainer",
    staffImageUrl: "https://picsum.photos/seed/staff8/200",
    contactEmail: "samuel.ogunleye@example.com",
    contactPhone: "+2348088888888",
  },
  {
    firstName: "Linda",
    lastName: "Edet",
    staffId: "STF-009",
    jobPosition: "Accounts Officer",
    staffImageUrl: "https://picsum.photos/seed/staff9/200",
    contactEmail: "linda.edet@example.com",
    contactPhone: "+2348099999999",
  },
  {
    firstName: "Ibrahim",
    lastName: "Sule",
    staffId: "STF-010",
    jobPosition: "IT Support",
    staffImageUrl: "https://picsum.photos/seed/staff10/200",
    contactEmail: "ibrahim.sule@example.com",
    contactPhone: "+2348100000000",
  },
];


const StaffGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {staffProfiles.map((staff) => (
        <StaffCard
          key={staff.staffId}
          firstName={staff.firstName}
          lastName={staff.lastName}
          staffId={staff.staffId}
          jobPosition={staff.jobPosition}
          staffImageUrl={staff.staffImageUrl}
          contactPhone={staff.contactPhone}
          contactEmail={staff.contactEmail}
        />
      ))}
    </div>
  );
};

export { StaffGrid };
