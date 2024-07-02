export abstract class EmailLayoutFormatter {
  public static format(arg: { body: string; title: string }): string {
    const { body, title } = arg;
    const runtimeConfig = useRuntimeConfig();
    const appUrl: string = runtimeConfig.public.appUrl as string;
    const year: number = new Date().getFullYear();
    const informationEmail: string = runtimeConfig.public
      .informationEmail as string;
    const informationFullName: string = runtimeConfig.public
      .informationFullName as string;
    const informationPhoneNumber: string = runtimeConfig.public
      .informationPhoneNumber as string;

    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><meta charset="UTF-8"><title>${title}</title></head><body style="font-family:Arial,sans-serif;background-color:#f4f4f4;margin:0;padding:0"><div style="max-width:900px;margin:0 auto;background-color:#fff"><div style="background-color:#002451;text-align:center;padding:20px;clip-path:polygon(100% 0,100% 77%,72% 100%,0 80%,0 0)"><h1 style="font-size:20pt;font-weight:700;margin:0;padding:0;color:#fff">${informationFullName}</h1><p style="font-size:15pt;font-weight:700;font-family:sans-serif;color:#fff">Développeur</p></div><div style="background-color:#fff;padding:36px 20px 20px 20px;margin-top:-16px;color:#000">${body}<div style="display:flex;align-items:center;justify-items:start"><img src="${appUrl}/images/profiles/profile-circle-150x150.png" alt="Profile Image" width="100" height="100" style="margin-right:2rem"><div style="max-width:900px"><p style="font-size:11pt;font-family:sans-serif;color:#000"><strong style="color:#000">${informationFullName}</strong><br><span style="font-size:9pt;color:gray">E-mail&nbsp;: <a href="mailto:${informationEmail}" style="color:#0563c1">${informationEmail}</a></span><br><span style="font-size:9pt;color:gray">Telephone&nbsp;: <a href="tel:${informationPhoneNumber}" style="color:#0563c1">${informationPhoneNumber}</a></span><br><span style="font-size:9pt;color:gray">Site web&nbsp;: <a href="https://portfolio-ismael.onrender.com" style="color:#0563c1">https://portfolio-ismael.onrender.com</a></span></p></div></div></div><hr style="background-color:gray;width:95%;margin:0 auto"><footer style="color:#000;background-color:#fff;text-align:center;padding:10px">&copy; ${year} ${informationFullName}.</footer></div></body></html>`;
  }
}
