// very usefull data you can use in your projects
// geo location, youtube, twitter, instagram


//<script>
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(() => {
      console.log('got location', pos)
    }, () => {
      console.log('nope')
    })
  }


//</script>