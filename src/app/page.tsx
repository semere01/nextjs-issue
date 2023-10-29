/**
 * To replication issue
 * 
 * Step 1: Run `next build`, and `next start`
 * Step 2: Open your deployment in your web browser
 * Step 3: Without closing your current tab, stop your `next start` terminal
 * Step 4: Uncomment the commented code
 * Step 5: Run `next build`, and `next start`
 * Step 6: Open your already running browser tab with the old app version and submit the form
 * Step 7: View console logs
 */


export default function Home() {
  return (
    <main >

      {/* <h1>Delete Form</h1>
      <form action={async (formData: FormData) => {
        "use server";
        console.log(`deleting user ${formData.get("username")}`);
      }} >
        <p>Enter user to delete</p>
        <input name="username" />
        <button type="submit"> Submit </button>
      </form> */}


      <h1>Create Form</h1>
      <form action={async (formData: FormData) => {
        "use server";
        console.log(`creating user ${formData.get("username")}`);
      }} >
        <p>Enter user to create</p>
        <input name="username" />
        <button type="submit"> Submit </button>
      </form>

    </main>
  )
}
