# Messaging UX - Mobile Native Experience

## Current State
- Basic input field at bottom
- Fixed positioning in flex container
- Button-only send (no Enter key)
- No keyboard handling
- No auto-scroll

## Mobile Native Messaging Needs

### 1. **Keyboard Handling** 📱
**Problem:** When keyboard opens on mobile, input can get hidden or pushed off-screen

**Solution:**
- Use `pb-safe` (iOS safe area) or `env(safe-area-inset-bottom)` 
- Fixed bottom input that stays above keyboard
- Viewport height calculations: `h-[calc(100vh-env(keyboard-height))]`

### 2. **Auto-Scroll** 📜
**Problem:** New messages don't auto-scroll into view, especially when keyboard is open

**Solution:**
```javascript
// Auto-scroll when new message arrives
useEffect(() => {
  if (chatMessagesRef.current) {
    chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
  }
}, [chatMessages.length]);

// Scroll to bottom when keyboard opens
useEffect(() => {
  const handleFocus = () => {
    setTimeout(() => {
      chatMessagesRef.current?.scrollTo({ bottom: 0, behavior: 'smooth' });
    }, 300); // Wait for keyboard animation
  };
  inputRef.current?.addEventListener('focus', handleFocus);
  return () => inputRef.current?.removeEventListener('focus', handleFocus);
}, []);
```

### 3. **Enter Key to Send** ⌨️
**Problem:** Users expect to press Enter (like texting)

**Solution:**
```javascript
const handleKeyPress = (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    handleSendMessage();
  }
  // Shift+Enter = new line (multiline)
};
```

### 4. **Multiline Input** 📝
**Problem:** Single-line input feels limiting

**Solution:**
- Use `<textarea>` instead of `<input>`
- Auto-grow up to ~4 lines
- `resize-none` with dynamic height
- `overflow-y-auto` for longer messages

### 5. **Bottom Padding for Keyboard** 📏
**Problem:** Content gets hidden behind keyboard

**Solution:**
```css
/* Use env() for keyboard height (iOS Safari) */
.chat-container {
  padding-bottom: env(keyboard-height, 0px);
}

/* Or use JavaScript to detect keyboard */
const [keyboardHeight, setKeyboardHeight] = useState(0);
useEffect(() => {
  const handleResize = () => {
    const vh = window.visualViewport?.height || window.innerHeight;
    setKeyboardHeight(window.innerHeight - vh);
  };
  window.visualViewport?.addEventListener('resize', handleResize);
}, []);
```

### 6. **iOS Safe Area** 📱
**Problem:** iPhone notch/home indicator overlap

**Solution:**
```css
.input-container {
  padding-bottom: env(safe-area-inset-bottom, 0px);
}
```

## Recommended Implementation

### Input Component Structure
```jsx
<div className="fixed bottom-0 left-0 right-0 bg-white border-t">
  <div className="px-4 py-3 pb-safe">
    <div className="flex items-end space-x-2">
      <button>+</button>
      <textarea
        ref={inputRef}
        value={messageInput}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Text Message"
        rows={1}
        className="flex-1 px-4 py-2 bg-gray-100 rounded-full resize-none overflow-y-auto max-h-24"
        style={{ 
          minHeight: '40px',
          maxHeight: '96px', // ~4 lines
        }}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  </div>
</div>
```

### Chat Container
```jsx
<div 
  ref={chatMessagesRef}
  className="flex-1 overflow-y-auto px-4 py-4"
  style={{ 
    paddingBottom: 'env(keyboard-height, 0px)',
    maxHeight: 'calc(100vh - 200px - env(keyboard-height, 0px))'
  }}
>
  {/* Messages */}
</div>
```

## Priority Implementation

**High Priority:**
1. ✅ Enter key to send
2. ✅ Multiline textarea (auto-grow)
3. ✅ Auto-scroll to bottom on new messages

**Medium Priority:**
4. Keyboard-aware padding
5. iOS safe area handling

**Low Priority:**
6. Keyboard height detection (if needed for Android)

## Testing Checklist

- [ ] Input stays visible when keyboard opens
- [ ] New messages auto-scroll into view
- [ ] Enter key sends message
- [ ] Shift+Enter creates new line
- [ ] Textarea grows smoothly (up to 4 lines)
- [ ] Works on iOS Safari (safe area)
- [ ] Works on Android Chrome
- [ ] Bottom nav doesn't overlap input
- [ ] Messages scroll smoothly when keyboard opens




