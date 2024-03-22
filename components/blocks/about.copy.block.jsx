// Util packages
import Icon from "../utils/icon.util";

// Utility packages
import space from "../utils/spacing.util";

/**
 * About section component block that contains the written copy
 *
 * @param {string} 	classProp template literals of classes for contain
 * @param {array}	icon request props [ iconType, iconKey ]
 * @param {string} 	title to be displayed
 * @param {string} 	copy written content
 * @returns {jsx} <CopyBlock />
 */
export default function CopyBlock({
  containerClass,
  iconClass,
  icon,
  title,
  copy,
  copy2,
  description,
  description2,
}) {
  return (
    <>
      <div className={containerClass}>
        <span className={iconClass}>
          <Icon icon={icon} />
        </span>
        <h3>{title}</h3>
        <h4>{copy}</h4>
        <h5 className="desc">{description}</h5>
        <h4>{copy2}</h4>
        <h5 className="desc">{description2}</h5>
      </div>
    </>
  );
}
