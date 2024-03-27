const RenderedContactList = ({contactList, email, phone}) => {
	return (
		<ul>
			{
				contactList.map((person) => {
					return <li key={person.id}>{person.name} || {person.email} || {person.phone}</li>				
				})
			}
		</ul>
	)
}

export default RenderedContactList