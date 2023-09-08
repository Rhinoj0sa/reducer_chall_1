export default function ContactList({ contacts, selectedId, dispatch }) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                const st = { state: { contactId: selectedId } };
                const act = { action: { type: "changed_selection" } };
                console.log(
                  `st:${JSON.stringify(st)} action:${JSON.stringify(act)}`
                );
                // TODO: dispatch changed_selection
                dispatch({
                  type: "changed_selection",
                  contactId: contact.id
                });
              }}
            >
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
