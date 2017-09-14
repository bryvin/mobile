import React, { Component } from 'react';
import GlobalStyles from "../../Styles"
import {TextInput, View} from 'react-native';

import SectionHeader from "../../components/SectionHeader";
import ButtonCell from "../../components/ButtonCell";
import TableSection from "../../components/TableSection";
import SectionedTableCell from "../../components/SectionedTableCell";
import SectionedAccessoryTableCell from "../../components/SectionedAccessoryTableCell";

export default class ThemesSection extends Component {
  render() {
    return (
      <TableSection>

        <SectionHeader title={this.props.title} />

        {this.props.themes.map(function(theme, i) {
          return (
            <SectionedAccessoryTableCell
              onPress={() => this.props.onThemeSelect(theme)}
              onLongPress={() => this.props.onThemeLongPress(theme)}
              text={theme.name}
              key={theme.uuid}
              first={i == 0}
              selected={() => {return theme.active}}
              buttonCell={true}
              tinted={true}
              dimmed={theme.notAvailableOnMobile}
            />
          )
        }.bind(this))}

      </TableSection>
    );
  }
}