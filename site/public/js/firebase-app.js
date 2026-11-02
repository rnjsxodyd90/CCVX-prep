// Shared Firebase wiring for the app pages (account, checkout, reader).
// Local development talks to the Firebase Emulator Suite; the same code
// works against the real project once the owner fills it in.
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getAuth, connectAuthEmulator, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { getFirestore, connectFirestoreEmulator, doc, getDoc } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { getFunctions, connectFunctionsEmulator, httpsCallable } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-functions.js';

const LOCAL = ['localhost', '127.0.0.1'].includes(location.hostname);
export const app = initializeApp(LOCAL
  ? { apiKey: 'fake-demo-key', authDomain: 'demo-ccvx.firebaseapp.com', projectId: 'demo-ccvx', appId: '1:demo-ccvx:web:demo' }
  : { apiKey: 'REPLACE_WITH_REAL_PROJECT', authDomain: 'ccvxultimateprep.firebaseapp.com', projectId: 'ccvxultimateprep', appId: '1:replace:web:demo' } // OWNER DECISION at go-live
);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const fns = getFunctions(app, 'europe-west1');
if (LOCAL) {
  connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
  connectFirestoreEmulator(db, 'localhost', 8080);
  connectFunctionsEmulator(fns, 'localhost', 5001);
}

export const onUser = (cb) => onAuthStateChanged(auth, cb);
export const logout = () => signOut(auth);
export const googleLogin = () => signInWithPopup(auth, new GoogleAuthProvider());
export async function emailLinkLogin(email) {
  await sendSignInLinkToEmail(auth, email, { url: `${location.origin}/account.html`, handleCodeInApp: true });
  localStorage.setItem('ccvx_email_for_signin', email);
  return email;
}
export async function completeEmailLinkLogin() {
  if (!isSignInWithEmailLink(auth, location.href)) return false;
  const email = localStorage.getItem('ccvx_email_for_signin') || prompt('Confirm your email address');
  if (!email) return false;
  await signInWithEmailLink(auth, email, location.href);
  localStorage.removeItem('ccvx_email_for_signin');
  history.replaceState(null, '', location.pathname);
  return true;
}
export const callable = (name) => httpsCallable(fns, name);
export async function getEntitlements(uid) {
  const snap = await getDoc(doc(db, 'entitlements', uid));
  return snap.exists() ? snap.data() : null;
}
