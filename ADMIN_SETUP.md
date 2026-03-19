# 🏎️ Diecast Garage - Admin Setup Guide

## 🔐 Security & Admin Access

### Default Admin Password
- **Password**: `admin123`
- **Location**: `admin.html`

⚠️ **IMPORTANT**: Change this immediately after setup!

---

## 🚀 Quick Start

1. **Open Admin Panel**
   - Click ⚙️ gear icon on your website
   - Or navigate directly to `admin.html`

2. **Login**
   - Enter password: `admin123`
   - Click "Access Admin Panel"

3. **Add Products**
   - Go to "Add Product" tab
   - Fill in details
   - Upload 4 images
   - Click "Add Product"

---

## 🔑 Changing the Admin Password

### Step 1: Open admin.html in Text Editor
- Right-click `admin.html`
- Select "Open with" → "Notepad" or your preferred editor

### Step 2: Find the Password Line
Search for: `if (password === 'admin123')`

You'll find this around line 970:
```javascript
if (password === 'admin123') {
```

### Step 3: Replace with Your Password
Change `'admin123'` to your own password, for example:
```javascript
if (password === 'MySecure@Pass2024') {
```

### Step 4: Save the File
- **Ctrl+S** (Windows) or **Cmd+S** (Mac)
- Done!

### Step 5: Test
- Refresh `admin.html`
- Try logging in with your new password

---

## 🛡️ Security Best Practices

✅ **DO:**
- Use a strong, unique password
- Include numbers, symbols, and mixed case
- Change password regularly
- Never share the admin.html file publicly
- Backup your data regularly

❌ **DON'T:**
- Use simple passwords like "123456" or "password"
- Share your admin password via email/chat
- Leave admin.html in a publicly accessible folder
- Upload admin.html to a shared hosting without protection

---

## 📋 Admin Features

### Add Product Tab
- Upload product name, year, series, condition
- Set price in GBP (£)
- Enter description
- Upload 4 product images
- Set stock quantity

### Manage Products Tab
- View all products with thumbnails
- See inventory statistics (total value, stock count)
- **Edit products** - Click "Edit" to modify details and images
- Delete products with one click

### Data & Settings Tab
- **Export**: Download all products as JSON backup
- **Import**: Restore from JSON backup
- **Delete All**: Nuclear option (cannot undo!)

---

## 📝 Editing Products

### How to Edit a Product

1. Go to **"Manage Products"** tab
2. Find the product you want to edit
3. Click the **"Edit"** button
4. **Update any fields** you want to change:
   - Product name, year, series
   - Condition, price, quantity
   - Description
5. **Upload new images** (optional):
   - Click an image to replace it
   - Or leave unchanged to keep the current image
6. Click **"Save Changes"**
7. Product is instantly updated on your website

### What Can You Edit?

✅ Product name  
✅ Year  
✅ Series  
✅ Condition (Mint/Excellent/Good)  
✅ Price  
✅ Quantity in stock  
✅ Description  
✅ All 4 images (individually)  

---

## 🗑️ Deleting Products

1. Go to **"Manage Products"** tab
2. Find the product to delete
3. Click **"Delete"** button
4. Confirm the deletion
5. Product is removed instantly

---

## 💾 Backing Up Your Products

### Export Your Data
1. Go to "Data & Settings" tab
2. Click "📥 Export Products (JSON)"
3. A file downloads: `diecast-garage-products-DATE.json`
4. **Keep this safe!** This is your backup

### Restore from Backup
1. Go to "Data & Settings" tab
2. Click "📤 Import Products (JSON)"
3. Select your saved `.json` file
4. Click "Import"
5. All products are restored!

---

## 🔄 Session Timeout

- Your login session lasts **8 hours**
- After 8 hours, you'll need to log in again
- Session is stored locally (only in your browser)

---

## ❓ FAQ

**Q: I forgot my password!**
A: Edit `admin.html` and look for `if (password === '...')` - that's your password. Change it to something you remember.

**Q: Can customers see the admin panel?**
A: No, it's password protected. Even if they find `admin.html`, they can't access it without the correct password.

**Q: Where are my products stored?**
A: Locally in your browser's storage (localStorage). Not on any server.

**Q: Will my data sync across devices?**
A: No, data is per-device/browser. Export/import to move data between devices.

**Q: Can I add more than 4 images per product?**
A: Currently 4 is the requirement. This can be customized if needed.

**Q: What if I lose my admin password?**
A: Edit the `admin.html` file with a text editor and change the password in the code.

---

## 🛠️ Technical Details

- **Storage**: Browser localStorage
- **Session Duration**: 8 hours
- **Authentication**: Client-side password check
- **Data Format**: JSON
- **Images**: Base64 encoded (embedded in data)

---

## 📞 Support Notes

If you need to modify the authentication system or add additional security features, the password check is located in the JavaScript section at the bottom of `admin.html`:

```javascript
function authenticate(password) {
    if (password === 'admin123') {  // ← Change this
        // ... authentication logic
    }
}
```

---

**Last Updated**: March 2025
**Diecast Garage v2.0**
