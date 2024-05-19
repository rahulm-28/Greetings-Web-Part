import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IGreetingsAppProps {
  greetingText: string;
  context: WebPartContext;
  position: string;
  textColor: string;
  fontSize: number;
  fontWeight: number;
}
