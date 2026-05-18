import {
  Battery,
  BatteryCharging,
  Radio,
  Smartphone,
  Truck,
  Zap,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  battery: Battery,
  zap: Zap,
  truck: Truck,
  "battery-charging": BatteryCharging,
  radio: Radio,
  smartphone: Smartphone,
};

export function getSolutionIcon(icon: string): LucideIcon {
  return ICONS[icon] ?? Zap;
}
