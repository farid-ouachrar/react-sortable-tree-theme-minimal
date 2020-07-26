import React, { Component } from "react";
import SortableTree, { toggleExpandedForAll } from "react-sortable-tree";
import CustomTheme from "../src/index";
import Add from "../src/icons/Add";
import "./app.css";
import Delete from "../src/icons/Delete";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: "",
      searchFocusIndex: 0,
      searchFoundCount: null,
      treeData: [
        {
          title: "Unnamed array []",
          type: "array",
          id: "111",
          children: [
            {
              title: "Unnamed string",
              dragDisabled: true,
              id: "114",
            },
          ],
        },
        { title: "Unnamed object {}", type: "object", id: "112" },
        {
          title: "Chicken",
          type: "string",
          children: [{ title: "Egg", id: "114" }],
          id: "113",
        },
      ],
    };
    this.updateTreeData = this.updateTreeData.bind(this);
    this.expandAll = this.expandAll.bind(this);
    this.collapseAll = this.collapseAll.bind(this);
  }

  updateTreeData(treeData) {
    this.setState({ treeData });
  }

  expand(expanded) {
    this.setState({
      treeData: toggleExpandedForAll({
        treeData: this.state.treeData,
        expanded,
      }),
    });
  }

  expandAll() {
    this.expand(true);
  }

  collapseAll() {
    this.expand(false);
  }

  render() {
    const {
      treeData,
      searchString,
      searchFocusIndex,
      searchFoundCount,
    } = this.state;

    const selectPrevMatch = () =>
      this.setState({
        searchFocusIndex:
          searchFocusIndex !== null
            ? (searchFoundCount + searchFocusIndex - 1) % searchFoundCount
            : searchFoundCount - 1,
      });

    const selectNextMatch = () =>
      this.setState({
        searchFocusIndex:
          searchFocusIndex !== null
            ? (searchFocusIndex + 1) % searchFoundCount
            : 0,
      });

    return (
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <div style={{ flex: "0 0 auto", padding: "0 15px" }}>
          <h3>Full Node Drag Theme</h3>
          <button onClick={this.expandAll}>Expand All</button>
          <button onClick={this.collapseAll}>Collapse All</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <form
            style={{ display: "inline-block" }}
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <label htmlFor="find-box">
              Search:&nbsp;
              <input
                id="find-box"
                type="text"
                value={searchString}
                onChange={(event) =>
                  this.setState({ searchString: event.target.value })
                }
              />
            </label>

            <button
              type="button"
              disabled={!searchFoundCount}
              onClick={selectPrevMatch}
            >
              &lt;
            </button>

            <button
              type="submit"
              disabled={!searchFoundCount}
              onClick={selectNextMatch}
            >
              &gt;
            </button>

            <span>
              &nbsp;
              {searchFoundCount > 0 ? searchFocusIndex + 1 : 0}
              &nbsp;/&nbsp;
              {searchFoundCount || 0}
            </span>
          </form>
        </div>

        <div style={{ flex: "1 0 50%", padding: "0 0 0 0px", outline: "none" }}>
          <SortableTree
            theme={CustomTheme}
            treeData={treeData}
            onChange={this.updateTreeData}
            searchQuery={searchString}
            searchFocusOffset={searchFocusIndex}
            qHeight={45}
            searchFinishCallback={(matches) =>
              this.setState({
                searchFoundCount: matches.length,
                searchFocusIndex:
                  matches.length > 0 ? searchFocusIndex % matches.length : 0,
              })
            }
            canDrag={({ node }) => !node.dragDisabled}
            generateNodeProps={() => ({
              type: ({ className }) => <span className={className}>S</span>,
              onClick: () => console.log("YOO"),
              buttons: [<Add />, <Delete />],
            })}
          />
        </div>
      </div>
    );
  }
}

export default App;
