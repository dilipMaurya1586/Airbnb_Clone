import { Bed, Calendar, CalendarClock, CalendarDays, CarFront, CarTaxiFront, ChartArea, ChartBar, ChartBarIcon, ChartColumn, Check, ChevronDown, ChevronLeft, CircleCheck, DoorOpen, Dot, EllipsisVertical, Eye, FerrisWheel, Gem, GitGraph, Heart, Home, Hotel, ImagePlus, Info, LayoutGrid, Loader2, LogOut, Mars, Minus, Moon, MoveLeft, MoveRight, Pen, Pin, Plane, Plus, Save, ShieldCheck, Star, Sun, User2, Users, Venus, X, Zap } from "lucide-react";

const Icons = {
  bed: Bed,
  flight: Plane,
  car: CarFront,
  attraction: FerrisWheel,
  taxi: CarTaxiFront,
  star:Star,
  gem:Gem,
  curve: ({ size, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="13"
      viewBox="0 0 9 13"
      fill="none"
      stroke="black"
      aria-hidden="true"
      role="img"
      {...props}
    >
      <path d="M9 12V12C4.58172 12 1 8.41828 1 4L1 0"></path>
    </svg>
  ),
  heart: Heart,
  check: Check,
  circleCheck: CircleCheck,
  zap: Zap,
  info: Info,
  eye:Eye,
  close:X,
  location:Pin,
  calendar:CalendarDays,
  user:User2,
  dropdown:ChevronDown,
  minus:Minus,
  plus:Plus,
  bookingHistory:CalendarClock,
  logout:LogOut,
  shield:ShieldCheck,
  male:Mars,
  female:Venus,
  pen:Pen,
  travelers:Users,
  save:Save,
  dot:Dot,
  room:DoorOpen,
  more:EllipsisVertical,
  rightArrow:MoveRight,
  dashboard:LayoutGrid,
  hotel:Hotel,
  addImage:ImagePlus,
  spinner:Loader2,
  leftArrow:ChevronLeft,
  home:Home,
  chart:ChartColumn,
  sun:Sun,
  moon:Moon,

};

export default Icons;