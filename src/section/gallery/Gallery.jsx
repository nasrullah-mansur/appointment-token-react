import GalleryItem from "./GalleryItem"


function Gallery(props) {
  return (
    <div className="mt-8 grid gap-3 grid-cols-4 grid-rows-2">
        {props.galleryItemsData.map(item => <GalleryItem key={item.id} galleryItemData={item} />)}
    </div>
  )
}

export default Gallery