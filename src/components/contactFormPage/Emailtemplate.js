import React from 'react';

const Emailtemplate = () => {
    return (
        <div>
            <table align='center' cellpadding='0' cellspacing='0' width='100%' style='border-collapse: collapse;'>
                <tr>
                    <td align='center' bgcolor='#212529' style='padding: 40px 0 20px 0;'>
                        <h3 style='color: #f05f40; font-family: Arial, sans-serif; font-size: 24px; line-height: 20px;'>STREAMLINE WIRING</h3>
                    </td>
                </tr>

                <tr>
                    <td bgcolor='#ffffff' style='padding: 30px 20px 30px 20px;' width='100%'>
                        <table cellpadding='0' cellspacing='0' width='100%'>
                            <tr>
                                <td align='center'>
                                    <h2>Contact Information</h2>
                                </td>
                            </tr>

                            <tr>
                                <td bgcolor='#e0e0eb'>
                                    <table width='100%'>
                                        <tr>
                                            <td width='50' valign='top'>
                                                Name:
                                            </td>
                                            <td valign='top'>${req.body.name}</td>
                                            <td style='font-size: 0; line-height: 0;' width='20'>
                                                &nbsp;
                                            </td>
                                            <td width='50' valign='top'>
                                                Phone:
                                            </td>
                                            <td valign='top'>${req.body.phone}</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>

                            <tr>
                                <td bgcolor='#e0e0eb'>
                                    <table width='100%'>
                                        <tr>
                                            <td width='50' valign='top'>
                                                Email:
                                            </td>
                                            <td valign='top'>${req.body.email}</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td align='center'>
                                    <h2>Property Details</h2>
                                </td>
                            </tr>
                            <tr>
                                <td bgcolor='#e0e0eb'>
                                    <table width='100%'>
                                        <tr>
                                            <td width='150' valign='top'>
                                                Bidding Deadline:
                                            </td>
                                            <td valign='top'>${req.body.biddingDeadline}</td>
                                            <td style='font-size: 0; line-height: 0;' width='20'>
                                                &nbsp;
                                            </td>
                                            <td width='150' valign='top'>
                                                Number of Units:
                                            </td>
                                            <td valign='top'>${req.body.numberOfUnits}</td>
                                        </tr>
                                        <tr>
                                            <td width='150' valign='top'>
                                                Site-Building Phase(s):
                                            </td>
                                            <td valign='top'>${req.body.sitePhases}</td>
                                            <td style='font-size: 0; line-height: 0;' width='20'>
                                                &nbsp;
                                            </td>
                                            <td width='150' valign='top'>
                                                Number of IDFs:
                                            </td>
                                            <td valign='top'>${req.body.numberOfIDFs}</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td align='center'>
                                    <h2>Message</h2>
                                </td>
                            </tr>
                            <tr>
                                <td bgcolor='#e0e0eb'>
                                    <p valign='top' style='white-space: pre-wrap'>
                                        ${req.body.message}
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td align='center' bgcolor='#212529' style='padding: 5px 0 5px 0;'>
                        <p style='color: #f05f40; font-family: Arial, sans-serif; font-size: 12px; line-height: 20px;'> &copy; ${new Date().getFullYear()} Copyright: streamlinewiring.com</p>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default Emailtemplate;
