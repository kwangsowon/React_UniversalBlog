/**
 * Created by wyf on 2017/4/26.
 */
export default function getProjection(fieldASTs) {
	return fieldASTs.selectionSet.selections.reduce((projections, selection)=>{
		projections[selection.name.value]=1;
		return projections;
	}, {})
}