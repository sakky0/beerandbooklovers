import { Switch } from "radix-ui";
import "./SwitchComponent.css";

export type ISwitchComponent = Switch.SwitchProps & {
    id: string;
    label?: string;
};

const SwitchComponent = ({ id, label, ...props }: ISwitchComponent) => (
    <form className="switch-component-container">
        <div className="switch-component">
            {label && (
                <label className="switch-label" htmlFor={id}>
                    {label}
                </label>
            )}
            <Switch.Root className="switch-root" id={id} {...props}>
                <Switch.Thumb className="switch-thumb" />
            </Switch.Root>
        </div>
    </form>
);

export default SwitchComponent;
