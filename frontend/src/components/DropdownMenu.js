// ...existing code...
const roles = ['User', 'Admin', 'Seller']; // Add 'Seller' to the roles array
console.log('Roles:', roles); // Debugging log
// ...existing code...

function DropdownMenu() {
  // ...existing code...
  return (
    <div>
      <select>
        {roles.map(role => (
          <option key={role} value={role}>{role}</option>
        ))}
      </select>
    </div>
  );
}
// ...existing code...
