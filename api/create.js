export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    // API KEY dari Environment Variable (AMAN)
    const SECRET_KEY = "ptla_HxwD2dEiZg26gx2UGrldt4map0y7npbUxJFA8bp2jq1";

    if (!SECRET_KEY) {
        return res.status(500).json({ error: "API KEY not set" });
    }

    const { ram, cpu, name, email } = req.body;

    return res.status(200).json({
        success: true,
        ram,
        cpu,
        name,
        email,
        key_status: "OK",
        url: `https://example.com/panel/${name}`
    });
}
