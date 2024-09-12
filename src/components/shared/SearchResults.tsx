import Loader from "./Loader";
import GridPostList from "./GridPostList";

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchPosts: any;
};

function SearchResults({ isSearchFetching, searchPosts }: SearchResultsProps) {
  if (isSearchFetching) {
    return <Loader />;
  } else if (searchPosts && searchPosts.documents.length > 0) {
    return <GridPostList posts={searchPosts.documents} />;
  } else {
    return (
      <p className="text-light-4 mt-10 text-center w-full">No results found</p>
    );
  }
}

export default SearchResults;
