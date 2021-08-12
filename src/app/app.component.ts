import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<form>
  <table>
  <tr><td><label>Inventory ID:</label><td>
  <input type="text" name="pid" size=20 /><br /></tr>
  <tr><td><label>Inventory Name:</label><td>
  <input type="text" name="pname" size=20 /><br /></tr>
  <tr><td><label>Inventory Unit:</label><td>
  <input type="text" name="punit" size=20 /><br /></tr>
  <tr><td><label>Inventory Price:</label><td>
  <input type="text" name="pprice" size=20 /><br /></tr>
  <tr><td><td><input type="submit" value="submit" /><br /></tr>
  </table>
  </form>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular192';
}
