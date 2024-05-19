import * as React from 'react';
import styles from './GreetingsApp.module.scss';
import { IGreetingsAppProps } from './IGreetingsAppProps';
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
import './Styles.css';

export default class GreetingsApp extends React.Component<IGreetingsAppProps, {}> {
  public render(): React.ReactElement<IGreetingsAppProps> {
    const custStyles = {
      // "text-align": this.props.position,
      "justify-content": this.props.position,
      color: this.props.textColor,
      fontSize: this.props.fontSize,
      fontWeight: this.props.fontWeight
    } as React.CSSProperties;

    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12)
        return "Good Morning!";
      else if (hour < 18)
        return "Good Afternoon!";
      else
        return "Good Evening!";
    }

    return (
      <div className={styles.personalGreeting}>
        {this.props.greetingText === null ? (
          <Placeholder
            iconName="Edit"
            iconText="Configure the web part"
            description="Please configure the web part"
            buttonLabel="Configure"
            onConfigure={this._onConfigure}
          />
        ) : (
          <div className={styles.title} style={custStyles} id='container'>
            {getGreeting()}{"\n"}
            {this.props.greetingText}{" "}
            {this.props.context.pageContext.user.displayName}
          </div>
        )}
      </div>
    );
  }
  private _onConfigure = (): void => {
    this.props.context.propertyPane.open();
  };
}
