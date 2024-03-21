import Icon from "../utils/icon.util.jsx";
import Badges from "../utils/badge.list.util";

import badges from "../../styles/blocks/badges.module.scss";

export default function BadgesBlock({
  title,
  copy,
  list,
  fullContainer,
  block,
  icon,
  invertedColor,
  headerIcon,
  containerClass,
  description,
}) {
  return (
    <div className={`${badges.badgeBlockContainer} ${containerClass}`}>
      <span className={headerIcon}>
        <Icon icon={["fat", icon]} />
      </span>
      <h3>{title}</h3>
      <Copy copy={copy} />
      <Description description={description} />
      <Badges
        list={list}
        block={block}
        invertedColor={invertedColor}
        fullContainer={fullContainer}
      />
    </div>
  );
}

function Copy({ copy }) {
  if (copy) return <p>{copy}</p>;
}

function Description({ description }) {
  if (description) return <p>{description}</p>;
}

function Description2({ descriptionS }) {
  if (descriptionS) return <p>{descriptionS}</p>;
}
