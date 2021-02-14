import React, { Component } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { withStyles } from "@material-ui/styles";
import { withRouter } from "react-router-dom";

const styles = theme => ({
  icon: {
    color: "white",
  },
});

class dateDropDown extends Component {
  constructor(props) {
    super(props);
  }

  updateYear(type, val) {
    if (type === "fromYear") {
      this.props.updateFromYear(val);
    } else {
      this.props.updateToYear(val);
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        {/* 1993 - 2019 */}
        <FormControl
          className="date-dropdown"
          style={{
            width: "180px",
            paddingLeft: "1rem",
            backgroundColor: "#121212",
          }}
        >
          <InputLabel
            id="from"
            style={{
              color: "white",
              paddingLeft: "1rem",
              paddingTop: "0.6rem",
            }}
          >
            From:
          </InputLabel>

          <Select
            style={{ color: "white", fontWeight: "bold" }}
            classes={{
              icon: classes.icon,
            }}
            labelId="from"
            id="from-year-select"
            value={this.props.fromYear}
            onChange={e => this.updateYear("fromYear", e.target.value)}
          >
            <MenuItem value={1993}>1993</MenuItem>
            <MenuItem value={1994}>1994</MenuItem>
            <MenuItem value={1995}>1995</MenuItem>
            <MenuItem value={1996}>1996</MenuItem>
            <MenuItem value={1997}>1997</MenuItem>
            <MenuItem value={1998}>1998</MenuItem>
            <MenuItem value={1999}>1999</MenuItem>
            <MenuItem value={2000}>2000</MenuItem>
            <MenuItem value={2001}>2001</MenuItem>
            <MenuItem value={2002}>2002</MenuItem>
            <MenuItem value={2003}>2003</MenuItem>
            <MenuItem value={2004}>2004</MenuItem>
            <MenuItem value={2005}>2005</MenuItem>
            <MenuItem value={2006}>2006</MenuItem>
            <MenuItem value={2007}>2007</MenuItem>
            <MenuItem value={2008}>2008</MenuItem>
            <MenuItem value={2009}>2009</MenuItem>
            <MenuItem value={2010}>2010</MenuItem>
            <MenuItem value={2011}>2011</MenuItem>
            <MenuItem value={2012}>2012</MenuItem>
            <MenuItem value={2013}>2013</MenuItem>
            <MenuItem value={2014}>2014</MenuItem>
            <MenuItem value={2015}>2015</MenuItem>
            <MenuItem value={2016}>2016</MenuItem>
            <MenuItem value={2017}>2017</MenuItem>
            <MenuItem value={2018}>2018</MenuItem>
            <MenuItem value={2019}>2019</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          className="date-dropdown"
          style={{
            width: "180px",
            marginLeft: "1rem",
            paddingLeft: "1rem",
            backgroundColor: "#121212",
          }}
        >
          <InputLabel
            id="to-select"
            style={{
              color: "white",
              paddingLeft: "1rem",
              paddingTop: "0.6rem",
            }}
          >
            To:
          </InputLabel>
          <Select
            style={{ color: "white", fontWeight: "bold" }}
            classes={{
              icon: classes.icon,
            }}
            labelId="to-select"
            id="to-select"
            value={this.props.toYear}
            onChange={e => this.updateYear("toYear", e.target.value)}
          >
            <MenuItem value={1993}>1993</MenuItem>
            <MenuItem value={1994}>1994</MenuItem>
            <MenuItem value={1995}>1995</MenuItem>
            <MenuItem value={1996}>1996</MenuItem>
            <MenuItem value={1997}>1997</MenuItem>
            <MenuItem value={1998}>1998</MenuItem>
            <MenuItem value={1999}>1999</MenuItem>
            <MenuItem value={2000}>2000</MenuItem>
            <MenuItem value={2001}>2001</MenuItem>
            <MenuItem value={2002}>2002</MenuItem>
            <MenuItem value={2003}>2003</MenuItem>
            <MenuItem value={2004}>2004</MenuItem>
            <MenuItem value={2005}>2005</MenuItem>
            <MenuItem value={2006}>2006</MenuItem>
            <MenuItem value={2007}>2007</MenuItem>
            <MenuItem value={2008}>2008</MenuItem>
            <MenuItem value={2009}>2009</MenuItem>
            <MenuItem value={2010}>2010</MenuItem>
            <MenuItem value={2011}>2011</MenuItem>
            <MenuItem value={2012}>2012</MenuItem>
            <MenuItem value={2013}>2013</MenuItem>
            <MenuItem value={2014}>2014</MenuItem>
            <MenuItem value={2015}>2015</MenuItem>
            <MenuItem value={2016}>2016</MenuItem>
            <MenuItem value={2017}>2017</MenuItem>
            <MenuItem value={2018}>2018</MenuItem>
            <MenuItem value={2019}>2019</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(dateDropDown));
