import PropTypes from "prop-types";
import React from "react";
import RelatedMaps from "terriajs/lib/ReactViews/RelatedMaps/RelatedMaps";
import {
  ExperimentalMenu,
  MenuLeft
} from "terriajs/lib/ReactViews/StandardUserInterface/customizable/Groups";
import MenuItem from "terriajs/lib/ReactViews/StandardUserInterface/customizable/MenuItem";
import StandardUserInterface from "terriajs/lib/ReactViews/StandardUserInterface/StandardUserInterface";
import version from "../../version";
import "./global.scss";

export default function UserInterface(props) {
  const relatedMaps = props.viewState.terria.configParameters.relatedMaps;
  const aboutButtonHrefUrl =
    props.viewState.terria.configParameters.aboutButtonHrefUrl;

  return (
    <StandardUserInterface {...props} version={version}>
      <MenuLeft>
        {/* aboutButtonHrefUrl のブロックを削除 */}
        {/* relatedMaps のブロックを削除 */}
      </MenuLeft>
      <ExperimentalMenu />
    </StandardUserInterface>
  );
}

UserInterface.propTypes = {
  terria: PropTypes.object,
  viewState: PropTypes.object
};
