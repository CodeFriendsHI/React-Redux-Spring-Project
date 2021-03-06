package quiz.start.awesomeTests;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.embedded.LocalServerPort;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * @author Geir Gardarsson
 * @date october 2017
 *
 * Test class for a HTTP-request
 */

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class HttpRequestTest {

    // fyrir random port
    @LocalServerPort
    private int port;


    @Autowired
    private TestRestTemplate restTemplate;

    /**
     * Aðferð til að prófa heimaslóðina.
     * Heimaslóðin inniheldur "container" í HTMLinu
     *
     * @throws Exception
     */
    @Test
    public void HttpRequestTest() throws Exception {
        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/",
                String.class)).contains("container");
    }
}
