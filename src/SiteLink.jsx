import PropTypes from "prop-types";
export default function SiteLink(props) {
  return <a href={props.url}>{props.linkName}</a>;
}

SiteLink.propTypes = {
  linkName: PropTypes.node,
};
