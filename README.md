# Aura Components Specialist

Showcase your mastery of Apex and Aura components by building a sophisticated app.

# Complete each challenge to earn your superbadge

## 1. Before you start

Complete all of the prework, including the installation of the unmanaged package.

## 2. Build the query-by-example form

Create a form displaying a dropdown that lists each boat type, along with Search and New buttons, using BoatSearchForm.cmp, BoatSearchResults.cmp, and BoatSearch.cmp, as described in the business requirements.

Add these Aura components to a Lightning page named Friends with Boats, and activate the page as a new tab in Lightning Experience and the Salesforce App. Lastly, create a Lightning application named FriendswithBoats.app that has a layout that is similar to the Lightning page.

## 3. Implement the BoatTile and BoatSearchResults components

Create a new BoatTile component and update your BoatSearchResults container to loop through all the results returned from an Apex controller BoatSearchResults to display an unfiltered list of every boat that HowWeRoll leases.

Define the method getBoats() in BoatSearchResults, to return search results as described in the business requirements. BoatSearchResults.cmp displays search results with a helper method, onSearch(), and displays each result as a BoatTile component.  

## 4. Implement the search filter

Create a FormSubmit event to allow your BoatSearchForm to pass the selected boat type to the BoatSearchResults component, which queries Apex and stores the results.

Handle FormSubmit with a controller action, onFormSubmit, and pass formData.boatTypeId from the controller to search, a public method on the BoatSearchResults component. The search function uses a helper function, onSearch(), and controller function, doSearch(), to get the list of boats. 

## 5. Highlight the selected boat

Fire a new BoatSelect event when a BoatTile is clicked, which sets the selectedBoatId on BoatSearchResults and in turn toggles the selected attribute on the right BoatTile, triggering the addition of a CSS class that shows a dark blue border around the selected boat as shown in the requirements. 

Do this by defining a click handler on the BoatTile’s lightning:button that invokes controller function onBoatClick, and raises the BoatSelect event, as laid out in the business requirements.

## 6. Display boat details

Create two new components—BoatDetails and BoatDetail—as well as a new event BoatSelected. Raise the new event from BoatTile, and leverage Lightning Data Service to output boat details. Deploy the BoatDetails component in the top right corner of the Lightning page.

## 7. Add boat reviews

Instantiate an AddBoatReview component inside the Add Review tab and display the form. When a user clicks Submit, save the record using Lightning Data Service and fire a BoatReviewAdded event that the BoatDetails parent component listens for so that it can switch the active tab to Reviews. Don’t worry about displaying the reviews yet.

## 8. Display boat reviews

Inside the Reviews tab, invoke a BoatReviews component that queries Apex and outputs the results based upon the Feeds component of the Lightning Design System, as shown in the business requirements. Hyperlink the user’s name to their record in Salesforce when possible.

## 9. Integrate third-party scripts

Create a FiveStarRating component with your coworker’s modified JavaScript to enable associates to give the boats a rating from 1–5 stars. Give the component edit and read modes that are used in the form and output, respectively.

## 10. Plot the Map Marker on the Map

Deploy a mapping component to show where your boat docks. The Map component and its controller were included in the unmanaged package you installed as part of this superbadge. The component listens for the PlotMapMarker event, which is fired when a user clicks a boat from the BoatTile component.
