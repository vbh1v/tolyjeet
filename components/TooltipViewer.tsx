import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LineChartOutlined, LinkedinOutlined, XOutlined } from "@ant-design/icons";

import { AtSign, Github, Linkedin } from "lucide-react";

import Link from "next/link";

export default function TooltipViewer() {
  return (
    <div className="flex gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="https://www.linkedin.com/in/danielwanjo/"
              target="_blank"
            >
              <LinkedinOutlined />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>LinkedIn</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="https://www.linkedin.com/in/vitaleak-butterchiken/" target="_blank">
            <LineChartOutlined />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Charts</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="https://twitter.com/vitaleaktoken" target="_blank">
              <XOutlined />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Twitter</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
