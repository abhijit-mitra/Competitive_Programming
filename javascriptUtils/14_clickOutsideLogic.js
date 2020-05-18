handleClickOutside = event => {
  if (this.container.current && !this.container.current.contains(event.target)) {
    this.setState({
      open: false,
    });
  }
};

componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
}
componentWillUnmount() {
  document.removeEventListener("mousedown", this.handleClickOutside);
}
